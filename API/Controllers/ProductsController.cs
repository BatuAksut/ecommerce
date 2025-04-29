using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext storeContext;
        public ProductsController(StoreContext context)
        {
            storeContext=context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts(){
            return await storeContext.Products.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id){
            var product= await storeContext.Products.FindAsync(id);
            if(product==null){
                return NotFound();
            }
            return Ok(product);
        }
    }
}
