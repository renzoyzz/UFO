using CoderCamps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UFOProject.Models;

namespace UFOProject.Services
{
    public class CitiesService : ICitiesService
    {
        private IGenericRepository _repo;

        public CitiesService(IGenericRepository repo)
        {
            this._repo = repo;
        }

        public ICollection<City> getCities() {
            return this._repo.Query<City>().Take(18).ToList();
        }

    }
}