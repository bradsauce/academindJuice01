import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../assets/data";
import {useState} from 'react';
import Section from './Section';

export default function CoreConcepts(){
    
    return(
        <Section title="Core Concepts" id="core-concepts">
          <ul>
            {/* This is one line (that I separated into two lines)
             that replaces all the commented code below */}
            {CORE_CONCEPTS.map((concept)=> 
            <CoreConcept key={concept.title} {...concept} />)}
            {/* This is the non-destructured version
            <CoreConcept
              title = {CORE_CONCEPTS[0].title}
              description = {CORE_CONCEPTS[0].description}
              image = {CORE_CONCEPTS[0].image}
            />
            This is the destructured version - much less code
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </Section>
    );
}