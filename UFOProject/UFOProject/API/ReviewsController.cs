using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web.Http;
using UFOProject.Models;
using UFOProject.Services;

namespace UFOProject.API
{
    public class ReviewsController : ApiController
    {
        private IReviewService _reviewService;

        public ReviewsController(IReviewService reviewService)
        {
            this._reviewService = reviewService;
        }

        public IHttpActionResult PostNewReview(WrittenReview review) {
            review.Title = Regex.Replace(review.Title, @"<[^>]*>", String.Empty);
            review.Content = Regex.Replace(review.Content, @"<[^>]*>", String.Empty);

            if (review.Content == null || review.Content == "")
            {
                ModelState.AddModelError("Content", "Review content is empty");
            }
            if(review.Title == null || review.Title == "")
            {
                ModelState.AddModelError("Title", "Review title is empty");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }



            this._reviewService.AddReview(review);
            return Created("/reviews/" + review.Id, review);

            
        }


    }
}
