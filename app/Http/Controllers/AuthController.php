<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {

        $fields = $request->validated();


        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt( $fields['password'] ),
        ]);

        $token = null;
        if (!$fields['remember']){
            $token = $user->createToken('myapptoken'.$user['id'])->plainTextToken;
        }
        if ($fields['remember']){
            $token = $user->createToken('myapptoken'.$user['id'], ['remember'])->plainTextToken;
        }

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 201);
    }

    public function login(LoginRequest $request)
    {

        $fields = $request->validated();

//        // Check Email
        $where = ["email"=>$fields['email']];
        $user = User::where($where)->first();
//        // Check Password
        if(!$user || !Hash::check($fields['password'], $user->password))
        {
            return response([
                'message' => __('messages.not_valid')
            ],403);
        }

        if (!$fields['remember']){
            $token = $user->createToken('myapptoken'.$user['id'])->plainTextToken;
        }
        if ($fields['remember']){
            $token = $user->createToken('myapptoken'.$user['id'], ['remember'])->plainTextToken;
        }


        $response = [
            'user'=>$user,
            'token'=>$token
        ];
        return response($response,201);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        $response = [
            'message' => 'logged out'
        ];

        return response($response,201);
    }


    public function someContent(){
        return '12313';
    }

}

