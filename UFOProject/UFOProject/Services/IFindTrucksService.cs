using System.Collections.Generic;
using UFOProject.Models;

namespace UFOProject.Services
{
    public interface IFindTrucksService
    {
        ICollection<Truck> GetTopRatedTrucks();
        ICollection<Truck> GetTrucksBySearch(params string[] search);
        ICollection<Truck> GetTrucksInCity(int cityId);
    }
}