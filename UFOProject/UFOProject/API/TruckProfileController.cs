using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UFOProject.Services;

namespace UFOProject.API
{
    public class TruckProfileController : ApiController
    {
        private ITruckProfileService _truckProfileService;

        public TruckProfileController(ITruckProfileService truckProfileService)
        {
            this._truckProfileService = truckProfileService;
        }

        public IHttpActionResult GetTruckProfile(int id) {
            var truck = this._truckProfileService.GetTruck(id);
            return Ok(truck);

        }

    }
}
