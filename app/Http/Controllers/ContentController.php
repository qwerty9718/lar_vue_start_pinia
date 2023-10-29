<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContentController extends Controller
{
    public function index(){
        return auth()->user();
    }

    public function getContent(){
        return 'Some content';
    }
}
