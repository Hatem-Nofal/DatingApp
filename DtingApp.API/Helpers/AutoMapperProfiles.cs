using System.Linq;
using AutoMapper;
using DtingApp.API.Dtos;
using DtingApp.API.Models;

namespace DtingApp.API.Helpers
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User,UserForListDto>().ForMember(dest=>dest.PhotoUrl,opt=>{
                opt.MapFrom(src=> src.Photos.FirstOrDefault(p=>p.IsMain).Url);
            })
            .ForMember(dest=>dest.Age,opt=>{
                opt.ResolveUsing(d=>d.DateOfBirth.CalculateAge());
            });
            CreateMap<User,UserForDetailDto>().ForMember(dest=>dest.PhotoUrl,opt=>{
                opt.MapFrom(src=> src.Photos.FirstOrDefault(p=>p.IsMain).Url);
            }) .ForMember(dest=>dest.Age,opt=>{
                opt.ResolveUsing(d=>d.DateOfBirth.CalculateAge());
            });
            CreateMap<photo,PhotoForDetailedDto>();
        }
    }
}