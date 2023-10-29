$(document).ready(function () {

    $('#page_form').on('submit', function (e) {
        e.preventDefault();
        let name = $("#name").val()
        let email = $("#email").val()
        let phone = $("#phone").val()

        axios.get(`https://api.myazarel.com/api/v1/newsletter/${email}/exists`).then((response) => {
            try {
                if (response.data.data) {
                    $(".user-exist-message").show().fadeOut(3000)
                    $('#page_form').trigger("reset")
                } else {
                    axios.post(`https://api.myazarel.com/api/v1/newsletter/${email}`, { name, phone }).then((response) => {
                        $(".success-message").show().fadeOut(3000)
                        $('#page_form').trigger("reset")
                    }).catch((err) => {
                        $(".error-message").show().fadeOut(3000)
                    });
                }
            } catch (error) {
                $(".error-message").show().fadeOut(3000)
                $('#page_form').trigger("reset")
            }
       
        })


    });
});