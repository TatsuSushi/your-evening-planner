<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class FriendListController extends Controller
{
    public function index(){
        $user = Auth::user();
        $friends = $user->getFriends();
        return view('friend-list',[
            'friends' => $friends
        ]);
    }

    public function post(Request $request){
        //get current user
        $user = Auth::user();
        // get email input
        $email = $request->input("email");
        //find user with email input in database
        $recipient = User::where('email', $email)->first();

        if($recipient){
            $user->befriend($recipient);
            $recipient->acceptFriendRequest($user);
            return redirect("/friend-list")->with('status', 'Successfully added!');
        }else{
            return redirect('/friend-list')->with('status', 'User does not exist!');

        }
    }

    public function unfriend(Request $request){
        //get current user
        $user = Auth::user();
        //get email value from delete button
        $friendID = $request->input("friend-delete-id");
        //find user with the email in database
        $friend = User::where('id', $friendID)->first();

        if($friend){
            $user->unfriend($friend);
            return redirect("/friend-list")->with('status','Successfully deleted...');
        }
    }
}
