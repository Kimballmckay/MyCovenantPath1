using MyCovenantPath1.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly CovenantPathDbContext _context;

    public UserController(CovenantPathDbContext context)
    {
        _context = context;
    }

    [HttpGet(Name = "GetUser")]
    public async Task<IActionResult> Get()
    {
        var user = await _context.Users
            .Select(u => new
            {
                u.MembershipRN,
                u.FirstName,
                u.LastName,
                u.Username,
                u.Password
            })
            .ToListAsync();

        return Ok(user);
    }

}
