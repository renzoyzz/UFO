using CoderCamps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UFOProject.Models;

namespace UFOProject.Services
{
    public class ReviewService : IReviewService
    {

        private IGenericRepository _repo;

        public ReviewService(IGenericRepository repo)
        {
            this._repo = repo;
        }

        public string AddReview(WrittenReview review) {
            review.Content = review.Content.Replace("\n\n\n", "\n");
            review.Rating = 5;
            if(review.Title.Length > 30)
            {
                review.Title.Substring(0, 30);
            }
            if (review.Content.Length > 7000)
            {
                review.Content.Substring(0, 7000);
            }
            this._repo.Add(review);
            
            this._repo.SaveChanges();
            return "Your Review has been submitted";


        }
    }
}
