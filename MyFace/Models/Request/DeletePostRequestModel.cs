using System.ComponentModel.DataAnnotations;
using MyFace.Models.Database;

namespace MyFace.Models.Request
{
    public class DeletePostRequestModel
    {
        [Required]
        public int Id { get; set; }
    }
}