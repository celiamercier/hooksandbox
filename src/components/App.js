import {
    CounterDemoClassComponent,
    CounterDemoFunctionalComponent,
    CounterDemoFunctionalComponentAsClass
} from './counter/CounterDemo';

export default function App() {
    return (
        <div>
            <CounterDemoClassComponent/>
            <CounterDemoFunctionalComponent/>
        </div>
    );
}
