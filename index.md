---
layout: default
---

# Introduction

Processes are important concepts in modern society since they control and standardize the interactions between businesses, consumers, governments and other organizations. Tasks, roles, artifacts and relationships are central abstractions used in processes to explicitly define models for possible execution flows. However, the rise of knowledge-based industries such as financial, healthcare, software development and insurance, imposes the adoption of agile processes that do not constrain _knowledge workers’_ decisions at runtime. The interplay between agility and unconstrained knowledge workers’ behavior promotes the emergence of complex and unpredictable work-graphs [1], gathering cross-cutting processes, tasks, people, information, rules and supporting software systems, a scenario in which representing, controlling and standardizing process abstractions is challenging.


Literature from process management brings the concepts the concept of Knowledge Intensive Processes (KIPs) [2] as being collaborative, goal-oriented, knowledge dependent and non-repeatable. KIPs can range from partially structured processes occurring when the overall workflow is not explicitly defined, but the existence of policies and regulations supports the identification of structured fragments; to unstructured processes appearing when the participants define the activities to be executed. As a result, KIPs abstractions are present in modern organization-to-individual interactions and capture the complexity imposed by the processes found in knowledge-based industries.

This website intends to analyze the Knowledge Intensive Processes (KIPs) lifecycle and discuss how KIPs are modeled and executed. A process lifecycle can be seen as a collection of _stages_ and associated _operations_ that allow intra or inter stages transitions. A _Process Stage_ can be defined as a place sharing common definitions such as a common metamodel or the same representation language. For example a Java program may seen as having two stages, one as the Java source-code and another as the Java byte-code. The Java source-code is defined by the [Java grammar](https://docs.oracle.com/javase/specs/jls/se7/html/jls-18.html) while the Java byte-code has it's own [file format](https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-4.html).
 _Transitions_  can be defined as operations allowing files moving from one stage to another (inter stage transition) or staying in the same stage with a different configuration (intra stage transition). Going back to the Java program example we can see the Java compiler as an inter stage transition as it compiles Java source-code into Java byte-code. On the other hand, a Java refactoring tool can be seen as an intra stage transition as the input and output files are both Java source-code.  
 Using stages and transitions abstractions to understand the lifecycle for knowledge intensive processes allows us to isolate and dissect concepts according to an specific rationale, and provide a didactical and systematic way to explore the phenomena. Moreover, stages and transitions abstractions are commonly used in Model Driven Engineering so we can leverage on some of its frameworks and tools.    


# Motivating Examples

Knowledge Intensive Processes are everywhere but sometimes they are recognized as simple prescriptive processes. By prescriptive processes we mean processes that can be executed as is, such as in a car assembly line where parts are fed in one end of the line and cars are deterministically assembled (sometimes with the help of individuals). However modern processes typically support individuals in achieving their goals and typically deviate from the original model to accommodate specific and unplanned needs. In order to better expose the KIP phenomenon this section brings several motivating examples to expose how process are in fact complex and non-deterministic.



<table style="width:100%">
  <tr>
    <th>Process</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><left><a href="./trip_plan/tp_bigpicture.html">Trip Planning</a></left></td>
    <td><justify>The Trip Planning process attempts to support a traveler to plan a trip.</justify></td>
  </tr>
  <tr>
    <td><left><a href="./fracture_clinic/fc_bigpicture.html">Fracture Clinic</a></left></td>
    <td><justify>The Fracture Clinic process ....</justify></td>
  </tr>
  <tr>
    <td><left><a href="./agile_sdp/sdp_bigpicture.html">Agile Software Process</a></left></td>
    <td><justify>The Agile Software Process ....</justify></td>
  </tr>
</table>



# KIP Lifecycle

To understand knowledge intensive process lifecycle, we first need to walkthrough process models. A process model indicates the elements that can be used as abstractions to represent real world scenarios. Process Models can be formal or informal. A _formal process model_ precisely describes a flow of work and is typically executed using a Workflow Management System (WMS) or a Process Aware Information System (PAIS). On the other hand an _informal process model_ is usually interpreted by humans and used as a discussion or documentation tool.

A process model can be represented with several languages such as [YAWL](), [BPMN](), [UML Activity Diagrams]() or [Petri Nets](). Although most languages share some similarities and are capable of representing process abstractions such as activities, sequencing and decisions, we will illustrate most of the process models used in this text with BPMN (Business Process Modeling Notation) as BPMN is recognized as the de facto process modeling language. We will also use CMMN (Case Management Modeling Notation), as CMMN allows representing flexible workflows that can be called from BPMN process or executed standalone. Both notations, BPMN and CMMN, are supported by several tool vendors (SAP, IBM, Signavio, Camunda, etc.) and can describe formal or informal processes. It is important to mention KIPs may require other abstractions than those found in BPMN and CMMN as exposed in [KIPO](), but we will annotate the model when required.  

A BPMN model is illustrated in Fig X. to represent a simple summation

-Process Models and Languages
-Examples with BPMN and CMMN

A [lifecycle](https://www.merriam-webster.com/dictionary/life%20cycle) is defined as "_a series of stages through which something (such as an individual, culture, or manufactured product) passes during its lifetime._" Processes have lifecycles as they are created, executed and in some way finalized.

In order to dissect the concepts related to knowledge intensive process one must understand the

## KIP Stages

<center>
<img src="https://docs.google.com/drawings/d/e/2PACX-1vTScmjPsEwlmqBdLHqHoU6OJ50CdaebiubPnxCxGSQ0ZfJZTWQaX8T7bH9XyBlc6--0iDwEQCyjrw9L/pub?w=525&amp;h=620">
</center>


***

### Concept Cloud

bla...

***

### Process Models

bla...

***

### Working Plan

bbla...

***

### Log View

bla...

***


## KIP Transitions

bla...

***

### Reification

bla...

***

### Tailoring

bla...

***

### Instantiation

bla...

***

### Execution/Enactment

bla...

***

### Improvement

bla...

***
