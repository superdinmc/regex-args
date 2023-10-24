function parse(text) {
    var result={},tmp=text+' ';
    while(tmp.length>0) {
        const match = tmp.match(/([a-zA-Z0-9]+)(?:= |: |=|:| is ) *(?:"(.+)" |([^ ]+) )/);
        if(match==null) return result;
        result[match[1]] = match[2]||match[3];
        tmp = tmp.slice(match[0].length);
    }
    return result
}

console.log(parse('hi=1 test1: hi another is "hello world"'))