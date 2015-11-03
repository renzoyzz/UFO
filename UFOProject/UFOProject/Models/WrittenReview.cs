using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace UFOProject.Models
{
    public class WrittenReview
    {

        public int Id { get; set; }

        public ApplicationUser Writer { get; set; }

        [JsonIgnore]
        public Truck Truck { get; set; }

        public int TruckId { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public int Rating { get; set; }




    }
}