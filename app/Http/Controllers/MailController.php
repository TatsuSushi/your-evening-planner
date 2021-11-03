<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Exceptions\Handler as Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Junges\InviteCodes\Facades\InviteCodes;

class MailController extends Controller
{
    public function acceptInvite($code, Exception $exception){

        //Add the event to the user's planner after redeeming code
        InviteCodes::redeem($code);
        $userID = Auth::id();
        $invite =  DB::table('invites')
            ->select('event_id')
            ->where('code', $code)
            ->first();;

        DB::table('events_users')->insert([
            'user_id' => $userID,
            'event_id' => $invite->event_id
        ]);

        return redirect('/invitation-accepted');
    }


}
