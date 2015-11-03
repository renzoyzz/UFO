using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UFOProject.Models;
using UFOProject.Services;

namespace UFOProject.API
{
    public class CitiesController : ApiController
    {

        private ICitiesService _cityService;

        public CitiesController(ICitiesService citiesService)
        {
            this._cityService = citiesService;
        }


        // GET: api/Cities
        public IHttpActionResult GetCities()
        {

            return Ok(this._cityService.getCities()); 
        }

        //Get: api/Cities/5
        public IHttpActionResult GetTrucksInCity(int id) {

            return Ok();
        }
    }
}
