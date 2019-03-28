using System.ComponentModel.DataAnnotations;

namespace DtingApp.API.Dtos {
    public class UserForRegisterDto {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8,MinimumLength=4,ErrorMessage="Password not vlid it must be bewteen 4 and 8 char")]
        public string Password { get; set; }

    }
}