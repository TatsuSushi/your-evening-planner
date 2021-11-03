@extends('layouts.app')

@section('content')
    <div>
        <div id="my-dashboard"></div>

        <script>
            var events = {!!json_encode($events)!!};
            var participants = {!!json_encode($participants)!!}
            var userID = {!! json_encode($userID) !!}
        </script>

        <script src ="../js/my-dashboard.js"></script>
    </div>
@endsection
