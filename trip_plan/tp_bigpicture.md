---
layout: default
---

# Trip Planning Procedure


## The Big Picture

Planning a trip is a recurring endeavor typically requiring the execution of activities such as:

 - defining the itinerary;
 - defining the start and end dates;
 - deciding on the number of travelers;
 - booking the airline;
 - booking a place to stay;
 - reserving a car;
 - reserving attractions;
 - buying insurance;

To  facilitate the Trip Planning Procedure the traveler might just set the initial parameters (itinerary, dates, travelers), negotiate everything with a travel agency or buy a pre-packaged trip (What is the fun in that!!!).  A more intrepid traveler might enjoy the do-it-yourself approach and spend hours - possibly days - navigating on several websites to better understand the options available and create a bespoke traveling experience. Maybe the dates are flexible and the travelers can fly on cheaper flights! Maybe the itinerary is flexible and the travelers might be able to explore local hidden gems! Maybe, after you bragging about your travel plans on a family Sunday lunch, gramma decides to jump in!

In order to organize and control the Trip Planning Procedure the intrepid traveler may create a simple TODO list defining the  activities and associated information required to complete the plan.  The list might be executed as per the traveler's discretion but some rules must be followed such as setting the initial parameters (itinerary, dates, travelers) upfront. Fig.1 brings a [BPMN](http://www.bpmn.org/) process model (Business Processes Modeling and Notation) to represent the TODO list in a "sophisticated" way.


<center>
 <img src="tp_bigpicture.png" alt="Trip Planning Process" >
 Fig1. Trip Planning Process
</center>

Besides representing the activities, the process model attempts to connect them in a streamlined flow, from the process starting point (Start Planning Trip) to the process endpoint (Travelers Ready to Travel). However, defining such flow seems complex: What should be done first? Reserve the Place? or Reserve the Airline?; How may times the same activity can be executed to accommodate new demands?


To give a simple answer to these questions: it all depends on the traveler's context. The context maybe simple if the traveler is traveling alone, which simplifies decisions. The context maybe complex, involving several travelers with different needs (remember gramma!), which brings collaborative decisions. As a result, creating a one-model-fits-all seems unproductive. Besides, it is important to understand the Trip Planning Procedure is supported by an IT infrastructure with several different software systems (e.g. several websites) that will be dynamically integrated (sometimes agnostically ) within the traveler's context and forcing a pre-established flow of activities may hamper creating the plan.

A better way to represent the Trip Planning Procedure is using the Knowledge Intensive Process paradigm where the process model indicates an accepted flow of activities, but the traveler is free to combine the activities to fit his/her needs. For example, Fig. 2 illustrates a simple flow where the traveler decides the initial parameters, then he/she deals with the airline, hotels, car, insurance and attractions sequentially. The process model is just an indication to help the intrepid traveler understanding what needs to be executed to plan the trip. Moreover, the simple flow maybe designed by an expert in trip planing, thus facilitating arranging the flow of activities systematically.

<center>
 <img src="tp_simpleflow.png" alt="Trip Planning Process" >
 Fig2. Trip Planning Process Simple Flow
</center>

A further look at Fig2. exposes some activities (the purple ones) have '+' sign at the bottom. That sign indicates the activity is in fact a process itself, sometimes with several nested flows. For example, to Reserve the Airline, the traveler needs to choose the class ( first, business, coach), the seat (window, aisle), the food (vegetarian?) and also pay using a credit card (or miles). It is easy to imagine the whole Trip Planning Procedure may require executing dozens of different activities, some human based, some hidden by the IT infrastructure.
In this scenario, some complex question arise: How do I keep track of my progress? How do I pass on my Trip Planning Procedure experience? How do I learn from planning several trips? How do I combine several trip planning experiences? and recommend the most successful ones?



[home](../index.html)
