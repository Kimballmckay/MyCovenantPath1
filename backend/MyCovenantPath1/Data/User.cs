﻿using System.ComponentModel.DataAnnotations;

namespace MyCovenantPath1.Data
{
    public class User
    {
        [Key]
        public int MembershipRN { get; set; }
        [Required]
        public string Username {  get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
    }
}
