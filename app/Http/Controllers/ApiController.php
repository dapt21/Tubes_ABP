<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function testApi(){
        $client = new \GuzzleHttp\Client();

        $response = $client->request('GET', 'https://opencritic-api.p.rapidapi.com/game', [
            'headers' => [
                'X-RapidAPI-Host' => 'opencritic-api.p.rapidapi.com',
                'X-RapidAPI-Key' => '3fc0565120msh9d35b9d73ece4cdp141856jsn25819190e465',
            ],
        ]);
        
        $data = json_decode($response->getBody(),  true);
        return view('welcome', ['data' => $data]);
    }
}
