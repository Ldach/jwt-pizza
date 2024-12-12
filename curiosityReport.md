# What are load balancers and how do they work?

This topic is something that I didn’t know much about before this class, and after struggling with my own implementation of a load balancer in AWS for my project, have decided to learn more about it.


## What are load balancers?
The basic principle of a load balancer is to have a middle man between user requests and the servers in order to decide which traffic goes to which server. When a service receives too many requests to handle, a load balancer can split the load between multiple servers to ensure no one server is overburdened. These are especially important on larger projects where you are consistently needing to handle large amounts of requests. Load balancers are extra useful when used as part of a dynamically scaling service as they can scale down and turn off servers when traffic is down, or scale up by requesting more servers when traffic is high. At their core, load balancers 


## Types of connections and why simplest isn’t always best
Since at its core a load balancer is just an algorithm that determines how to distribute requests evenly between servers. One simple solution to evenly distributing load between servers is to just rotate between them, assigning each sequential user to the next server in the queue. This seems to work on paper, but can lead to overburdened servers for many reasons such as one server getting lots of users who stay connected longer. A better, though slightly more complex and expensive to run, is to have the load balancer in constant communication with each server, monitoring its current load, and sending new connections to servers with the lowest. These only represent two possible types of load balancers, though there are countless algorithms that could be used to prioritize different use cases.


## Types of load balancer and a brief history
Today, load balancers can be run as software on servers, a physical appliance connected to a network of servers, or even a virtual load balancer which is run on a virtual machine within an environment. The hardware/physical appliance type of load balancers came first and came to be used primarily in the late 90’s and early 00’s during the dot-com boom. As applications become more popular, server managers need to find a way to ensure high availability and scalability. Around the early 00’s virtual load balancers became more and more popular as allowed for more cost efficient and easier scalability. This also allowed load balancers to become more complex and flexible. As the scale of the internet continued to grow, so did the application and scope of load balancers. Current day load balancers are also able to serve as a security measure against DDOS attacks and other malicious requests.





