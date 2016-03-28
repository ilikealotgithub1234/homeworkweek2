$("button").click(function(){
			var name = POSTGETorDELETE('https://data.sparkfun.com/input/4J0dwJKJ0lI1dD1gwWol','b5Bvy575Bdh4vg47yRAP','GET','json').;

			var score = Number($("#score").val());
			if (score<50){
				alert("You need a score of 50 or higher to get onto the leaderboard! Better luck next time!");
			} else {
				var a=1;
				scores.push(score);
				names.push(name);
				var len = scores.length;
				x = len-1;
				while (x>0){
					i=0;
					while (i<x){
						first= scores[i];
						second= scores[i+1];
						if (first<second){
							var z = scores[i];
							var y = names[i];
							scores[i] = scores[i+1];
							names[i] = names[i+1];
							names[i+1] = y;
							scores[i+1] = z;
						}
						i=i+1
					}
					x=x-1
				}
				$("table").html("<tr><td><b>"+names[0]+": "+scores[0]+"</b></td></tr>");
				while (a<len){
					$("table").append("<tr><td>"+names[a]+": "+scores[a]+"</td></tr>");
					a = a+1;
				}
			}
		})
