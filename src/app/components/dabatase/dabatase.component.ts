import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { ExampleFlatNode } from 'src/app/Model/DatabaseExpandModel';
import { DatabaseNode } from '../../Model/DatabaseModel';
@Component({
  selector: 'app-dabatase',
  templateUrl: './dabatase.component.html',
  styleUrls: ['./dabatase.component.css'],
})

export class DabataseComponent implements OnInit {
   TREE_DATA: DatabaseNode[] = [
    {
      name: 'Database',
      children: [
        {
          name: 'DB1',
          children: [{name: 'Table1'}, {name: 'Table2'}],
        },
        {
          name: 'DB2',
          children: [{name: 'Table1'}, {name: 'Table2'}],
        },
      ],
    },
  ];
  
  ngOnInit(): void {}
  private _transformer = (node: DatabaseNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = this.TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
