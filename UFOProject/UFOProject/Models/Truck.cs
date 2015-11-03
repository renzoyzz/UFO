using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace UFOProject.Models
{
    public class Truck
    {

        public int Id { get; set; }

        public City City { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string MyProperty { get; set; }

        public decimal Geolocation { get; set; }

        public ICollection<ApplicationUser> Followers { get; set; }

        public ICollection<Event> Events { get; set; }

        public ICollection<WrittenReview> WrittenReviews { get; set; }

        public int ReviewAverage { get; set; }

        public ICollection<string> HashTags { get; set; }

        public Truck()
        {
            this.WrittenReviews = new List<WrittenReview>();
        }
    }
}