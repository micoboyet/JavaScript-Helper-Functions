<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Confirm Modal</title>
    
    <!-- Bootstrap CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Jquery -->
    <script type="text/javascript" src="js/jquery-2.1.4.js"></script>

    <!-- Confirm Modal -->
    <script type="text/javascript" src="js/confirm.js"></script>

	<script>
	$(function()
	{
		Confirm.init('sm');

		$('#generic-button').unbind();
		$('#generic-button').bind('click', function(e)
		{
			e.preventDefault();
			Confirm.show('Modal Title', 'Modal Content');
		});

		$('#save-button').unbind();
		$('#save-button').bind('click', function(e)
		{
			e.preventDefault();
			Confirm.show('Modal Title', 'Modal Content', {
				'Save' : {
					'primary' : true,
					'callback' : function()
					{
						Confirm.show('Message', 'You have clicked Save');
					}
				}
			});
		});

		$('#delete-button').unbind();
		$('#delete-button').bind('click', function(e)
		{
			e.preventDefault();
			Confirm.show('Modal Title', 'Modal Content', {
				'Delete' : {
					'primary' : true,
					'callback' : function()
					{
						Confirm.show('Message', 'You have clicked Delete');
					}
				}
			});
		});

		$('#three-button').unbind();
		$('#three-button').bind('click', function(e)
		{
			e.preventDefault();
			Confirm.show('Modal Title', 'Modal Content', {
				'Save' : {
					'primary' : true,
					'callback' : function()
					{
						Confirm.show('Message', 'You have clicked Save');
					}
				},
				'Delete' : {
					'primary' : true,
					'callback' : function()
					{
						Confirm.show('Message', 'You have clicked Delete');
					}
				}
			});
		});
	});

</script>
</head>
<body>
	<br/>
	<div class="row container">
		<button id="generic-button" class="btn btn-default" type="submit">Okay Button</button>
		<button id="save-button" class="btn btn-default" type="submit">Save and Close Button</button>
		<button id="delete-button" class="btn btn-default" type="submit">Delete and Close Button</button>
		<button id="three-button" class="btn btn-default" type="submit">Save, Delete and Close Button</button>
	</div>
</body>
</html>