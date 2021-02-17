import React from 'react';
import { Card, Button, OverlayTrigger, Popover } from "react-bootstrap";
import { FaInfoCircle } from 'react-icons/fa';

function Homepage() {
    return (
        <>
            <div className="container homePageFooter">
                <div className="about-me">
                    <section className="me">
                        <img className="my-img"
                            src="Profile_Picture.jpg"
                            alt="Robert McGrew" />
                        <p>Passionate about approaching challenges from different angles and collaborating with
                        others to create meaningful web applications. Recently earned a certificate in Full Stack Development from the
                        University of Utah and developed skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, and Handlebars JS. Known as an
                        innovative problem-solver passionate about developing apps. Aim for each project is to best engage the audience for an impactful user-experience. Excited to leverage my
                        skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web.

                        I have a strong passsion for learning and I have a lot to learn. I am looking for an opportunity to expand my skill set by
                        working with senior developers and other begginers like myself to expand my skill set as well as give my
                        best effort and bring what I have to offer to the company. I work great with others in a team setting, putting our ideas together to accomplish a task.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis tempor augue. Nulla facilisi. Aliquam erat volutpat. Maecenas non lacinia felis, non ultrices sem. Proin lobortis turpis quis lobortis pellentesque. Fusce dapibus turpis quis dolor placerat, ac fringilla elit condimentum. Maecenas lacinia pellentesque sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nec lectus iaculis, pulvinar orci eget, rutrum nunc. Nullam pharetra venenatis ornare. Nunc ante velit, vestibulum sed lacus in, consectetur aliquam leo. Pellentesque pharetra nibh et lacus ullamcorper, quis euismod nulla dictum. Morbi ac ligula ac leo tristique pulvinar nec id dolor. Nam ipsum mi, cursus at malesuada ut, accumsan at magna. Maecenas iaculis, nulla bibendum dictum pulvinar, ligula ipsum luctus leo, vel dignissim nunc dui sed tellus. Nunc in felis lobortis, lacinia arcu non, vehicula leo. Etiam ut laoreet purus. Pellentesque in nibh nunc. Mauris scelerisqumpus nibh. Nam tincidunt lectus justo, ac lobortis dui dapibus at. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eu venenatis magna. Pellentesque dictum ultrices mattis. Nam faucibus tristique est dignissim pretium.</p>
                    </section>
                </div>
            </div>

<div className="testing-div"></div>

            <section id="projects"><h1>Projects</h1></section>
            <div className="projects-card-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="Project-2.png" />
                    <Card.Body>
                        <Card.Title>Movie Favorites 
{['right' ].map((placement) => (
    <OverlayTrigger
      trigger="hover"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Title as="h3">{`Movie Favorites`}</Popover.Title>
          <Popover.Content>
            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget dui at consequat. Pellentesque placerat sed felis in mollis. Morbi placerat nunc in eros interdum malesuada. Vestibulum quis lorem quis orci faucibus bibendum. Maecenas eu placerat nibh, et mollis libero. Cras sodales laoreet risus eget rhoncus. Cras suscipit, tellus eget porta finibus, ligula nisi pretium orci, et bibendum risus justo ac nunc. Mauris id facilisis est.

Fusce dolor mauris, cursus eu neque a, finibus tristique massa. Integer efficitur pharetra accumsan. Suspendisse ac tincidunt augue, at volutpat nisi. Nunc dictum nisl ut sem commodo posuere. Etiam consequat quam vitae purus pharetra, vitae auctor felis mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras est enim, viverra quis commodo ut, pulvinar 

Sed vel ada Integer blandit quam sapien, nec luctus nisl semper et. Maecenas ut tellus ut metus consectetur dictum vel eget odio. Aliquam bibendum libero eu turpis imperdiet feugiat. Duis consequat tincidunt ipsum sit amet auctor. Integer vel purus quis enim molestie lobortis. Phasellus tellus massa, viverra sit amet interdum at, tincidunt non velit. Integer et suscipit diam.
            </strong>
          </Popover.Content>
        </Popover>
      }
    >
      <Button variant="secondary" className="pop-up-btn"><FaInfoCircle /></Button>
    </OverlayTrigger>
  ))}
                        </Card.Title>
                        <Card.Text>
                            In this project I worked with a team to create an application that would allow a user to create an account and search for movies with an API. The user also has the option to save any searched movies to their "favorites" list. The account the user creates is then saved to a database, so the user can log in at anytime to view saved movies, or add more!
  </Card.Text>
                        <Button variant="primary" href="https://projectdash.herokuapp.com/" target="blank">Click here to see the  application live!</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="utah_views.png" />
                    <Card.Body>
                        <Card.Title>Utah Views</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
  </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="Google_Books_API_App.png" />
                    <Card.Body>
                        <Card.Title>Google Books</Card.Title>
                        <Card.Text>
                            An easy way to search your favorite books and where you can buy them. In this project, I utilized google's book API to get information on a searched book. You can view the book online and find where to buy the full book. Have a favorite book? Click favorite to save that book as a favorite for easy access later on!
  </Card.Text>
                        <Button variant="primary" href="https://immense-wildwood-67889.herokuapp.com/" target="blank">Click here to see the  application live!</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="password_generator.jpeg" />
                    <Card.Body>
                        <Card.Title>Password Generator</Card.Title>
                        <Card.Text>
                            In this project I created a password generator. When the red "Generate Password" button is clicked, you will be prompted with a series of questions regarding how unique you would like your password. Once you have answered all the questions, your random password will be shown in the box above the red "Generate Password" button.
  </Card.Text>
                        <Button variant="primary" href="https://robbie2497.github.io/password_generator-homework/" target="blank">Click here to see the  application live!</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="foodtruck.png" />
                    <Card.Body>
                        <Card.Title>Wine and Cheese Foodtruck</Card.Title>
                        <Card.Text>
                            In this project I worked with a small team to create an application that would allow a foodtruck owner to display their business online with an option for customers to order ahead of time from their menu. With implementaion of the Google Maps API and a weather API, the food truck's location will update with current weather reports.
  </Card.Text>
                        <Button variant="primary" href="https://robbie2497.github.io/Project-1/" target="blank">Click here to see the  application live!</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.poolparty.biz/wp-content/uploads/2018/06/SEMANTiCS-who-should-attend.png" />
                    <Card.Body>
                        <Card.Title>Learning About Semantics</Card.Title>
                        <Card.Text>
                            In this project I took pre-developed website which had many bugs and was not accessible. Each element
                            in the HTML was set to div, so it wasn't very sematic. I refactored the code using semantics to make
                            the website more accessible. This was a challenging yet rewarding activity as I searched through the
                            code looking for ways to fix the bugs, and how to change the elements so that they were semantically
                            correct.
  </Card.Text>
                        <Button variant="primary" href="https://robbie2497.github.io/accessability-homework/" target="blank">Click here to see the  application live!</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://blog.rescuetime.com/wp-content/uploads/2018/01/photo-1506485338023-6ce5f36692df-1000x486.jpeg" />
                    <Card.Body>
                        <Card.Title>Daily 9 to 5 Scheduler</Card.Title>
                        <Card.Text>
                            In this project I created a daily schedule application. You can enter text into the desired time
                            frame and
                            press the save button to save text to the local storage to prevent it from deleting when the page is
                            refreshed. I also added a clear button to remove the text in one single click. As the day moves on,
                            the
                            text box will change colors. Green for future time, Red for current time, and gray for past time.
  </Card.Text>
                        <Button variant="primary" href="https://robbie2497.github.io/work_day_scheduler-homework/" target="blank">Click here to see the  application live!</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="Scratch_Game.png" />
                    <Card.Body>
                        <Card.Title>My First Code</Card.Title>
                        <Card.Text>
                            In this project I created game using Scratch. This was the very first thing I created when I first started getting into coding. I leared how "if then" statements work, and also learned a little about how to create a simple game using
                            code. This project was a lot of fun and I hope to apply the new skills I learn to create an application that is more
                            elaborate in the future!
  </Card.Text>
                        <Button variant="primary" href="https://scratch.mit.edu/projects/368827932/" target="blank">Click here to see the  application live!</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
export default Homepage;