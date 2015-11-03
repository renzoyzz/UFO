using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UFOProject.Models;

namespace UFOProject.API
{
    public class CarouselController : ApiController
    {


        private ApplicationDbContext _db = new ApplicationDbContext();


        // GET: api/Carousel
        public List<CarouselItem> Get()
        {
            return (from m in _db.CarouselItemList select m).ToList();
        }

        // GET: api/Carousel/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Carousel
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Carousel/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Carousel/5
        public void Delete(int id)
        {
        }
    }
}
