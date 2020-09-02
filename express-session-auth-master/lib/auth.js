module.exports = {
    isOwner:function(request, response) {
        if (request.session.is_logined) {
            return true;
        } else {
            return false;
        }
    }, //그 사용자인지 , authisOwner였는데 모듈은 prefix 삭제 -> isOwner라는 이름으로
    statusUI:function(request, response) {
        var authStatusUI = '<a href="/auth/login">login</a>'
        if (this.isOwner(request, response)) { //auth가 자기 자신이므로 this.isOwner로 
            authStatusUI = `${request.session.nickname} | <a href="/auth/logout">logout</a>`;
        } //확인해서 그 사용자가 맞다면 로그인 글씨 -> 로그아웃으로 바꾸기
        return authStatusUI;
    }
}