import Script from 'next/script';

export default function OpenAIPixel() {
    const pixelId = process.env.NEXT_PUBLIC_OPENAI_PIXEL_ID;

    if (!pixelId) return null;

    return (
        <Script id="openai-ads-pixel" strategy="afterInteractive">
            {`
                !function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");
                oaiq("init",{pixelId:"${pixelId}"});
            `}
        </Script>
    );
}
