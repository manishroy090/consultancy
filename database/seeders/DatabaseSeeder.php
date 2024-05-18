<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Models\VisaType;
use App\Models\Country;
use App\Models\Visa;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $users = [
            [
                'name'=>'eurodream',
                'email'=>"eurodream@gmail.com",
                'password'=>Hash::make('eurodreamadmin'),
            ],
            [
                'name' => 'developer',
                'email' => "dev@gmail.com",
                'password' => Hash::make('eurodreamdev'),
            ]
            ];

        User::insert($users);



        $countries = [
            [
                'name'=>"Afghanistan",
                'image'=>''
                          ],
            [
                'name'=>"Albania",
                'image'=>''
            ],
             
            [
                'name'=>"Algeria",
                'image'=>''
            ],
            [
                'name'=>"Andorra",
                'image'=>''
            ],
            [
                'name'=>"Angola",
                'image'=>''
            ],
            [
                'name'=>"Antigua and Barbuda",
                'image'=>''
            ]
        ];

        Country::insert($countries);

        $visatypes = [
            [
                'name'=>"Nomad Visa",

            ],[
                'name'=>"Tourist",

            ],
            [
                'name'=>"Invitation",

            ],
            [
                'name'=>"Study",

            ],
            [
                'name'=>"e-Visa",

            ],
            [
                'name'=>"Work Permit",
    
            ]
            ];

        VisaType::insert($visatypes);

       $visa = [
         [
            'visatype_id'=>1,
            'country_id'=>2

         ],
         [
            'visatype_id'=>1,
            'country_id'=>3

         ]
         ];
      
        Visa::insert($visa);

    }
}
