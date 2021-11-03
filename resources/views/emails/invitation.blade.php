@component('mail::message')
# You have been invited to an event!

Hello, you have been invited by {{$hostName}} to join an event with details below:
<div style="text-align-last: center">
    <h5>{{$event->title}}</h5>
    <p>{{$event->venue}}</p>
    <p>{{$event->date}}</p>
    <p>{{$event->time}}</p>
    <p>{{$event->event_type}}</p>
    <p>{{$event->description}}</p>
</div>

Click this button here if you would like to accept the invitation

<script>
    var invite_code = {!! json_encode($invite_code)!!};
</script>

<div id="email-invitation"></div>
<script src="../js/Email.js"></script>
@component('mail::button', ['url' => 'http://localhost:8000/accept-invitation/' . $invite_code->code])
Accept Invitation
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
