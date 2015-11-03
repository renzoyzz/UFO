using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UFOProject.Models
{
    public class Event
    {
        public int Id { get; set; }

        public ApplicationUser Creator { get; set; }

        public ICollection<Truck> Trucks { get; set; }

        public ICollection<ApplicationUser> UsersComing { get; set; }

        public decimal Geolocation { get; set; }

    }
}