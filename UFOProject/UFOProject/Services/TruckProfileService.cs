using CoderCamps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UFOProject.Models;

namespace UFOProject.Services
{
    public class TruckProfileService : ITruckProfileService
    {
        private IGenericRepository _repo;

        public TruckProfileService(IGenericRepository repo)
        {
            this._repo = repo;
        }

        public Truck GetTruck(int id) {

            var vari = this._repo.Query<Truck>()
                .Include(t => t.WrittenReviews)
                .Where(t => t.Id == id)
                .FirstOrDefault();
            return vari;
        }


    }
}