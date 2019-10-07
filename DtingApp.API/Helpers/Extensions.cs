using System;
using Microsoft.AspNetCore.Http;
namespace DtingApp.API.Helpers {
    public static class Extensions {
        public static void AddApplicationError (this HttpResponse respone, string message) {

            respone.Headers.Add ("Application-Error", message);
            respone.Headers.Add ("Access-control-Expose-Header", "Application-Error");
            respone.Headers.Add ("Access-control-Allow-Origin", "*");

        }

        public static int CalculateAge (this DateTime theDateTime) {
            var age = DateTime.Today.Year - theDateTime.Year;
            if (theDateTime.AddYears (age) > DateTime.Today) {
                age--;

            }
            return age;
        }
    }
}