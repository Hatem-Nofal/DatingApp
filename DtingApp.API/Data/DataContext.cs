using DtingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DtingApp.API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options){}

        public DbSet<Value> Values{get;set;}

        public DbSet<User> Users  { get; set; }
        public DbSet<photo> photos {get;set;}        
    }
}