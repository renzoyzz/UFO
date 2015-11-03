using UFOProject.Models;

namespace UFOProject.Services
{
    public interface ITruckProfileService
    {
        Truck GetTruck(int id);
    }
}