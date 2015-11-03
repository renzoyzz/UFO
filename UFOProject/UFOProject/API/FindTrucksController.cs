using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UFOProject.Services;

namespace UFOProject.API
{
    public class FindTrucksController : ApiController
    {

        private IFindTrucksService _findTrucksService;

        public FindTrucksController(IFindTrucksService findTrucksService)
        {
            this._findTrucksService = findTrucksService;
        }

        public IHttpActionResult GetTrucksWithNoFilter() {
            try
            {
                return Ok(this._findTrucksService.GetTopRatedTrucks());
            } catch
            {
                return BadRequest("Error Getting Trucks");
            }
        }

        public IHttpActionResult GetTrucksInCity(int id) {
            return Ok(this._findTrucksService.GetTrucksInCity(id));
        }


    }
}
