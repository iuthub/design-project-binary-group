<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Validator;

class UserController extends Controller
{
    public function create(Request $request) {
        $user = new User($request->all());
        $check = User::where('mail', $user['mail'])->first();
        if (empty($check)) {
            if(filter_var($user['mail'], FILTER_VALIDATE_EMAIL)) {
                // valid address
                $user->save();
                return response()->json(['result' => true, 'data' => $user]);
            } else {
                // invalid address
                return response()->json(['result' => false, 'data' => 'Email not valid']);
            }
        } else {
            return response()->json(['result' => false, 'data' => 'This email alrady exist']);
        }
    }

    public function authorization(Request $request) {
        $mail = $request->input('mail');
        $user = User::where('mail', $mail)->first();
        if (empty($user)) {
            return response()->json(['result' => false]);
        } else {
            return response()->json(['result' => true, 'data' => $user]);
        }
    }

}
