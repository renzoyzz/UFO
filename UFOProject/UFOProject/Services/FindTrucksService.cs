using CoderCamps;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Web;
using UFOProject.Models;

namespace UFOProject.Services
{
    public class FindTrucksService : IFindTrucksService
    {

        private IGenericRepository _repo;

        public FindTrucksService(IGenericRepository repo)
        {
            this._repo = repo;
        }

        public ICollection<Truck> GetTopRatedTrucks() {
            var topTrucks = this._repo.Query<Truck>()
                .OrderByDescending(t => t.ReviewAverage)
                .Include(t => t.WrittenReviews)
                .Take(20)
                .ToList();
            return topTrucks;

        }

        public ICollection<Truck> GetTrucksInCity(int id) {
            var cityTrucks = this._repo.Query<Truck>()
                .Where(t => t.City.Id == id)
                .OrderByDescending(t => t.ReviewAverage)
                .Take(20)
                .ToList();
            return cityTrucks;
        }

        public ICollection<Truck> GetTrucksBySearch(params string[] search) {
            List<Truck> matchedTrucks = new List<Truck>();
            foreach (var word in search)
            {
                matchedTrucks = this._repo.Query<Truck>()
                .Where(t => t.HashTags.Contains(word))
                .Take(20)
                .ToList();
            }
            return matchedTrucks;
        }
    }
}