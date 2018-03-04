module.exports = function check(str, bracketsConfig) {
    var br=[];

    for (var i=0; i<bracketsConfig.length;i++)
    {
        arr=bracketsConfig[i];
        br[i]= arr[0]+ arr[1];
    }

    for ( i=0; i<br.length;i++)
    {
        var pos=0;

        if (str.indexOf(br[i])>=0) // нашли какие-нибудь скобки
        {

            pos=str.indexOf(br[i]);
            str=str.slice(0,pos)+str.slice(pos+2)

            i=-1;

        }


    }
    if (str.length===0) {return true;}
    else {return false;}
}
