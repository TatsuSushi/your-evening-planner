@extends('layouts.app')

@section('content')
    <div id="friend-list">

            <script>var csrf="{{@csrf_token()}}";</script>
        <script>
            var status = `{{ session('status') }}`;
            var friends = {!!json_encode($friends)!!};

        </script>
        <script src="../js/friend-list.js"></script>
    </div>
@endsection
