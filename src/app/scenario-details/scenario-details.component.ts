import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScenarioService, Scenario } from '../scenario.service';

@Component({
  selector: 'app-scenario-details',
  templateUrl: './scenario-details.component.html',
  styleUrl: './scenario-details.component.css'
})
export class ScenarioDetailsComponent implements OnInit {

  scenario: Scenario | undefined;

  constructor(
    private route: ActivatedRoute,
    private scenarioService: ScenarioService
  ) { }

  ngOnInit(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    
    console.log(uuid);

    if (uuid) {
      this.scenarioService.getScenario(uuid).subscribe(data => {
        this.scenario = data;
      });
    }
  }

}
