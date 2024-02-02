export async function handle({ event, resolve }) {
	if(event.url.pathname.startsWith('/confirmMoney')){
		console.log(event)
		return new Response("diick")
	}else{
		return resolve(event)
	}
}
