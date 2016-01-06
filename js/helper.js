var Helper =
{
	emailRegExp : new RegExp('^([A-Za-z0-9\.\_\-]+)@([A-Za-z0-9\.\_\-]+).([A-Za-z]){2}?$'),

	validate : {
		email : function(string)
		{
			return Helper.emailRegExp.test(string);
		},

		date : function(date)
		{
	            var retval = false;
	
	            var isValid = false;
	            var dateReg = null;
	            var datePieces = null;
	            var separator = null;
	            var slashSeparator = new RegExp('/');
	            var dashSeparator  = new RegExp('-');
	
	            if(slashSeparator.test(date))
	            {
	                dateReg = new RegExp('((19|20)[0-9]{2})/([0-9][1-2])/([0-2][0-9]|[3][0-1])$');
	                datePieces = date.split('/');
	                separator = '/';
	                isValid = true;
	            }
	
	            if(dashSeparator.test(date))
	            {
	                dateReg = new RegExp('((19|20)[0-9]{2})-([0-9][1-2])-([0-2][0-9]|[3][0-1])$');
	                datePieces = date.split('-');
	                separator = '-';
	                isValid = true;
	            }
	
	            if(isValid)
	            {
	                var tMonth = parseInt(datePieces[1]);
	                var tDay = parseInt(datePieces[2]);
	
	                if(tMonth < 10)
	                    tMonth = '0' + tMonth;
	                if(tDay < 10)
	                    tDay = '0' + tDay;
	
	                date = datePieces[0] + separator + tMonth + separator + tDay;
	
	                if(dateReg.test(date))
	                    retval = true;
	            }
	
	            return retval;
		}
	},

	generate : {
		randomString : function(length)
		{
			if(typeof length == 'undefined' || !length)
				length = 5;

		    var result = "";
		    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		    for( var i=0; i < length; i++ )
		        result += characters.charAt(Math.floor(Math.random() * characters.length));

		    return result;
		}
	},

	textbox : {
		bindNumbers : function(elementId, arrExclusion)
		{
			tempChars = [46, 8, 9, 27, 13, 110, 190];

			if(typeof arrExclusion == 'undefined' || !arrExclusion)
				arrExclusion = tempChars
			else
			{
				arrExclusion = tempChars.concat(arrExclusion);
			}

			$(elementId).unbind();
			$(elementId).bind('keydown', function(e)
			{
		        // Allow: backspace, delete, tab, escape, enter, . and custom exclusion
		        if ($.inArray(e.keyCode, arrExclusion) !== -1 ||
		             // Allow: Ctrl+A
		            (e.keyCode == 65 && e.ctrlKey === true) ||
		             // Allow: Ctrl+C
		            (e.keyCode == 67 && e.ctrlKey === true) ||
		             // Allow: Ctrl+X
		            (e.keyCode == 88 && e.ctrlKey === true) ||
		             // Allow: home, end, left, right
		            (e.keyCode >= 35 && e.keyCode <= 39)) {
		                 // let it happen, don't do anything
		                 return;
		        }
		        // Ensure that it is a number and stop the keypress
		        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		            e.preventDefault();
		        }
			});
		},

		bindLetters : function(elementId, arrExclusion)
		{
			tempChars = [];

			for(x=65; x<=90; x++)
				tempChars.push(x);

			if(typeof arrExclusion == 'undefined' || !arrExclusion)
				arrExclusion = tempChars
			else
			{
				arrExclusion = tempChars.concat(arrExclusion);
			}

			$(elementId).unbind();
			$(elementId).bind('keydown', function(e)
			{
		        // Allow: backspace, delete, tab, escape, enter, . and custom exclusion
		        if ($.inArray(e.keyCode, arrExclusion) !== -1 ||
		             // Allow: Ctrl+A
		            (e.keyCode == 65 && e.ctrlKey === true) ||
		             // Allow: Ctrl+C
		            (e.keyCode == 67 && e.ctrlKey === true) ||
		             // Allow: Ctrl+X
		            (e.keyCode == 88 && e.ctrlKey === true) ||
		             // Allow: home, end, left, right
		            (e.keyCode >= 35 && e.keyCode <= 39)) {
		                 // let it happen, don't do anything
		                 return;
		        }
		        // Ensure that it is a number and stop the keypress
		        if ((e.shiftKey || (e.keyCode < 91 || e.keyCode > 64)) && (e.keyCode < 91 || e.keyCode > 64)) {
		            e.preventDefault();
		        }
			});
		}
	},

	utils : {
		removeWhiteSpaces : function(string)
		{
			return string.replace(/\s/g, '');
		},
		
		capitalize : function(string)
		{
	            var finalString = '';
	            var arrWords = string.split(' ');
	            var arrPieces = [];
	
	            if(arrWords.length == 1)
	                finalString = string.charAt(0).toUpperCase() + string.slice(1);
	            else
	            {
	                for(var i=0; i<arrWords.length; i++)
	                    arrPieces.push(arrWords[i].charAt(0).toUpperCase() + arrWords[i].slice(1));
	
	                finalString = arrPieces.join(' ');
	            }
	
	            return finalString;
		}
	}
};
