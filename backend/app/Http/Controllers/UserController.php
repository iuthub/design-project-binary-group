<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function create(Request $request) {
        $user = new User($request->all());
        $check = User::where('mail', $user['mail'])->first();
        if (empty($check)) {
            $user->save();
            return response()->json(['result' => true, 'data' => $user]);
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
