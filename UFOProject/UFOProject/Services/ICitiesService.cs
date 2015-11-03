using System.Collections.Generic;
using UFOProject.Models;

namespace UFOProject.Services
{
    public interface ICitiesService
    {
        ICollection<City> getCities();
    }
}