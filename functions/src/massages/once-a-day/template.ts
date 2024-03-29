export const htmlWithNew = `<html>

<head>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        body {
            background: #d5d8d7;
        }

        .card {
            position: relative;
            float: right;
            /**/
            margin-left: 10px;
            width: 95%;
            height: max-content;
            border-radius: 10px;
            background: #fff;
            -webkit-box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
            box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
        }

        div {
            margin: 20px;
        }

        ul {
            list-style-type: none;
            width: 500px;
        }

        h3 {
            font: bold 20px/1.5 Helvetica, Verdana, sans-serif;
        }

        li .big-icon {
            float: right;
            /**/
            margin: 0 15px 0 0;
            text-align: center;
            font: 40px/60px Georgia, Times New Roman, serif;
        }

        li p {
            font: 200 12px/1.5 Georgia, Times New Roman, serif;
        }

        li {
            padding: 10px;
            overflow: auto;
        }

        li:hover {
            background: #eee;
            cursor: pointer;
        }

        h2 {
            font: 400 40px/1.5 Helvetica, Verdana, sans-serif;
            margin: 2rem;
            padding: 0;
        }

        .fas {
            margin: 0.7rem;
        }
    </style>
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">


</head>

<body dir="rtl">
    <div class="card suitdiamonds">
        <h2>
            <%= tytle %>
        </h2>
        <div>
            <ul>
                <% for(let mail of newMails){ %>
                    <li>
                        <p class="big-icon">
                            <i class="fas fa-envelope"></i>
                        </p>
                        <h3>
                            <small>
                                <%= mail.date %>
                            </small>
                            <strong>
                                <%= mail.massage %>
                            </strong>
                        </h3>
                        <p>
                            <%= mail.comment %>
                        </p>
                    </li>
                    </hr>
                    <% } %>
                        <li>
                            <p class="big-icon">1</p>
                            <h3>Headline</h3>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </li>
            </ul>
        </div>
    </div>
</body>

</html>`;
export const htmlWithoutNew = ``;