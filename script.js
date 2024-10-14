/* Задание (повторение)
Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com/users.
Вывести имена пользователей на страницу на боковой панели, как вертикальное меню.
В основной части (справа от бокового меню) изначально показывается информация о первом пользователе.
При клике на имя пользователя на боковой панели - в основной части информация меняется на выбранного пользователя. 
*/

let usersInfo = async () => {
    try {
        let responce = await fetch('https://jsonplaceholder.typicode.com/users');
        let user = await responce.json();
        console.log(user);

        const ul = document.querySelector('ul');
        const name = document.querySelector('.name');
        const nick = document.querySelector('.nick');
        const por = document.querySelector('.por');
        const pow = document.querySelector('.pow');
        const email = document.querySelector('.email');
        const infoBox = document.querySelector('.info-box');       


        const showUserInfo = (user) => {
            const userAddress = user.address;
            const fullAddress = `${userAddress.street}, ${userAddress.suite}, ${userAddress.city}, ${userAddress.zipcode}`;


            const template = `
            <h2 class="name">${user.name}</h2>
            <h3 class="nick">${user.username}</h3>
            <p class="por">${fullAddress}</p>
            <p class="pow">${user.company.name}</p>
            <a class="email" href="${user.email}">Write to him/her</a>
        `;
            infoBox.innerHTML = template;
        };

        showUserInfo(user[0]);


        user.forEach((user) => {
            let li = document.createElement('li');
            li.textContent = user.name;
            ul.appendChild(li);

            li.addEventListener('click', () => {
                showUserInfo(user);
            });
        });

    } catch (error) {
        console.log('Возникла ошибка: ' + error);
    }
};

usersInfo();
