function ExecuteScript(strId)
{
  switch (strId)
  {
      case "68NyfV4Wnl9":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyWDW_5WavF_MlhrHPEFKIzoMew3TMwm4lKrUPVzoBkBsv1Z4HvpOSVk7afxGFosdmCIg/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v4q1attempts:player.GetVar("v4q1attempts"),v4q1answeredcorrect:player.GetVar("v4q1answeredcorrect")})
	}
	)
}

