using Microsoft.EntityFrameworkCore;
using ThesisManagementSystem.DataAccess;
using ThesisManagementSystem.Interfaces;
using ThesisManagementSystem.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddTransient<IThesisManagementSystem, ThesisManagementSystemDataAccessLayer>();
builder.Services.AddDbContext<ThesisManagementContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

